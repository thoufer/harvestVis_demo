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

harvestFIPS <- harvestFIPS %>% 
  mutate(state = floor(FIPS/1000)) %>% 
  group_by(state) %>% 
  mutate(countyNo = n()) %>% 
  ungroup

# pull state abbrev and state FIPS from PCS frame .... (better if in file1)
harvestFIPS <-left_join(harvestFIPS,PCSData_2017 %>% 
                                      mutate(state = floor(FIPS/1000)) %>% 
                                      group_by(ST, state) %>% 
                                      summarize(count=n()) %>% 
                                      select(abbrev = ST, state))
# Washington DC is missing from PCS and entered as "Washington DC" ... edit:
harvestFIPS[harvestFIPS$state == 11,c("countyName","abbrev")] <- c("Washington","DC")
# HI is missing from PCS, add abbreviation:
harvestFIPS[harvestFIPS$state == 15,c("abbrev")] <- "HI"

  
harvestByCounty <- PCSData_2017 %>% 
  group_by(FIPS, Taxa) %>% 
  summarize(harvest = sum(Wt)/10) %>% 
  mutate(state = floor(FIPS/1000), 
         county = FIPS - 1000*state, 
         harvestCo = ifelse(county != 0, harvest, 0)) %>% # county = 0 are state only FIPS
  ungroup

# Adjust county totals for the harvest recorded only to state (* state-total/all_counties-total)
harvestByState <- harvestByCounty %>% 
  group_by(state) %>% 
  summarize(adjHarvest = sum(harvest)/sum(harvestCo)) %>%
  ungroup

harvestByCounty <- left_join(harvestByCounty,harvestByState) %>% 
  mutate(harvest_adj = harvest * adjHarvest) %>% 
  filter(county > 0) %>% 
  select(FIPS, Taxa, harvest_adj)

# 
harvestByCounty <- spread(harvestByCounty, Taxa, harvest_adj)

# Add FIPS with 0 hunting for state rankings, etc. 3114 relevant counties/census units
harvestByCounty <- right_join(harvestByCounty, harvestFIPS[!(harvestFIPS$abbrev %in% c("AK","DC","HI")),]) 

harvestByCounty[is.na(harvestByCounty)]<-0

harvestByCounty <- harvestByCounty %>% 
  mutate(rankDuck = rank(-Ducks), rankGeese = rank(-Geese)) # rank highest to lowest harvest

numCo <- nrow(harvestByCounty)

harvestByCounty <- harvestByCounty %>% 
  mutate(percentileDuck = ifelse(Ducks==0,0,(numCo-sum(Ducks==0)+1-rankDuck)/(numCo-sum(Ducks==0)+1)), 
         percentileGeese = ifelse(Geese==0,0,(numCo-sum(Geese==0)+1-rankGeese)/(numCo-sum(Geese==0)+1))) 
# percentiles = j/n+1 j = n largest harvest, n = # counties with >0 harvest, percentile no harvest = 0


harvestByCounty <- harvestByCounty %>% 
  group_by(state) %>% 
  mutate(stateRankDuck = rank(-Ducks), stateRankGeese = rank(-Geese)) %>% 
  ungroup

harvestByCounty <- right_join(harvestByCounty, harvestFIPS) # add in AK, HI, and DC FIPS

harvestByCounty$FIPS <- str_pad(harvestByCounty$FIPS,width=5,side="left", pad="0") # add leading 0

# change 0s to NAs for duck harvest = 0 and goose harvest = 0 so that tooltip says "No harvest reported in survey."
harvestByCounty$rankDuck[harvestByCounty$Ducks == 0] <- NA
harvestByCounty$rankGeese[harvestByCounty$Geese == 0] <- NA

harvestByCounty$stateRankDuck[harvestByCounty$Ducks == 0] <- NA
harvestByCounty$stateRankGeese[harvestByCounty$Geese == 0] <- NA

write.table(harvestByCounty,"H:\\My Docs\\Data\\Hackathons\\HarvestSurveyHack_Sept2017\\harvestVis_demo\\js\\Counties.csv", sep=",", quote=F, na = "", row.names = F)

