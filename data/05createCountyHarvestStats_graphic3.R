# Summarize harvest diary data by FIPs (ducks, geese) for country choropleth
#
# 10-Sept-2018 E Silverman
#
# PCS data frame from 02createPCSDataFrame.R code (PCSData_2017)
#
# Code creates harvestByCounty
# requires fips_combine (3111 relevant FIPS codes, including 2000 - AK state)

#PCSData_2017$FIPS[PCSData_2017$FIPS==32025 & !is.na(PCSData_2017$FIPS)]<-32510 # Carson City FIPS is miscoded in some years

# FIPS codes with county names:
Path <- "H:\\My Docs\\Data\\Hackathons\\HarvestSurveyHack_Sept2017\\harvestVis_demo\\data\\"
file1 <- "CountyName_fips.csv"

harvestFIPS <- read.csv(paste0(Path,file1),quote="", as.is=T)
# remove AK and HI
#harvestFIPS <- harvestFIPS[!(round(harvestFIPS$FIPS/1000) %in% c(2,15)),] # not cut as they are needed for the graphic ....

harvestFIPS <- harvestFIPS %>% mutate(state = round(FIPS/1000)) %>% group_by(state) %>% mutate(countyNo = n()) %>% ungroup

harvestByCounty <- PCSData_2017 %>% group_by(FIPS, Taxa) %>% summarize(harvest = sum(Wt)/10) %>%
                    filter(FIPS != 2000) %>% # cut AK
                    mutate(state = round(FIPS/1000), county = FIPS - 1000*state, harvestCo = ifelse(county != 0, harvest, 0))

# Adjust county totals for the harvest recorded only to state (* state-total/all_counties-total)
harvestByState <- harvestByCounty %>% group_by(state) %>% summarize(adjHarvest = sum(harvest)/sum(harvestCo))
harvestByCounty <- left_join(harvestByCounty,harvestByState) %>% mutate(harvest_adj = harvest * adjHarvest) %>% filter(county > 0) %>% select(FIPS, Taxa, harvest_adj)

# 
harvestByCounty <- spread(harvestByCounty, Taxa, harvest_adj)

harvestByCounty <- right_join(harvestByCounty, harvestFIPS[!(harvestFIPS$state %in% c(2,15)),]) # Add FIPS with 0 hunting for state rankings, etc. 3110 relevant counties

harvestByCounty[is.na(harvestByCounty)]<-0

harvestByCounty <- harvestByCounty %>% ungroup %>% mutate(rankDuck = rank(-Ducks), rankGeese = rank(-Geese)) # rank highest to lowest harvest

harvestByCounty <- harvestByCounty %>% mutate(percentileDuck = ifelse(Ducks==0,0,(3110-sum(Ducks==0)+1-rankDuck)/(3110-sum(Ducks==0)+1)), percentileGeese = ifelse(Geese==0,0,(3110-sum(Geese==0)+1-rankGeese)/(3110-sum(Geese==0)+1))) # percentiles = j/n+1 j = n largest harvest, n = # counties with >0 harvest, percentile no harvest = 0

harvestByCounty <- harvestByCounty %>% group_by(state) %>% mutate(stateRankDuck = rank(-Ducks), stateRankGeese = rank(-Geese)) %>% ungroup

harvestByCounty <- right_join(harvestByCounty, harvestFIPS) # add in AK and HI FIPS

harvestByCounty$FIPS <- str_pad(harvestByCounty$FIPS,width=5,side="left", pad="0") # add leading 0

write.table(harvestByCounty,"H:\\My Docs\\Data\\Hackathons\\HarvestSurveyHack_Sept2017\\harvestVis_demo\\js\\Counties.csv", sep=",", quote=F, row.names = F)
