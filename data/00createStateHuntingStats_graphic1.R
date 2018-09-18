# Pull and calculate data from Diary survey & PCS by state
#
# 7-Sept-2018 E Silverman
#
# This is not a function b/c currently need to correct DB errors on case by case basis

library(RODBC)
library(tidyverse)

## 1 ##
# Diary data with hunter statistics are in dbo.DkGsEsts_ESilverman table in "harvest_data" database:
diaryData_10yr_2017 <- createDiaryDataSummary.fn(tableName="dbo.DkGsEsts_ESilverman",interval=10)
  
diaryData_10yr_2017$abbrev <- as.character(diaryData_10yr_2017$abbrev)

## 2-3 ##  
# Read in and clean up PCS data ... this function does some "data set version" specific data cleaning ....
PCSData_2017 <- createPCSDataFrame.fn()
                                     
PCSDataranks_10yr_2017 <- createPCSStateTaxaSummary.fn() # this is slow b/c reading in a large table
  
statesData <- left_join(diaryData_10yr_2017, PCSDataranks_10yr_2017, by = c("abbrev" = "ST"))
  
names(statesData)[c(2,9,10)]<-c("abbrev","rankDuck","rankGeese")

## 4 ##  
stateComposition <- createHarvestCompositionData.fn(inData = PCSData_2017, select.taxa = "Ducks")
  
statesData <- left_join(statesData, stateComposition, by = c("abbrev" = "ST"))

# Read in IDs for states:
stateIDs <- read.csv("H:\\My Docs\\Data\\Hackathons\\HarvestSurveyHack_Sept2017\\harvestVis_demo\\data\\StateIDs.csv", as.is = T)

statesData <- left_join(stateIDs, statesData)

statesData <- statesData[,c(1:9,12:13,10:11)] # order to match previous file

# Write output into States.csv ....
write.table(statesData, "H:\\My Docs\\Data\\Hackathons\\HarvestSurveyHack_Sept2017\\harvestVis_demo\\data\\States.csv", sep=",", row.names = F, quote = F)
  