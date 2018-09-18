# Reads, cleans, and subsets PCS data by state for Graphic 1
#
# NOTE! This function includes some data correction code that is specific to the dataset being read in on 12-Sept-2018 
#
createPCSDataFrame.fn <- function(tableName = "dbo.wPCS_ESilverman", interval = 10) {
  
  library(RODBC)
  library(tidyverse)
  
  #Create a connection object to the database via ODBC
  hs <- odbcConnect("harvest_data")
  
  PCSData <- sqlFetch(hs,tableName)
  
  out <- PCSData %>% filter(Season > max(Season)-interval) # filter to last 10 yrs only
  
  ## DATA FIXES ....
  
  # cUT COOTS
  out <- out %>% filter(AOU != 2210)
  
  # missing state for many 503 (AK) and one 414 (CA)
  out$ST[is.na(out$ST) & out$SNo %in% c(503)] <- "AK" #SNo = BBL flyway + state code, see www.pwrc.usgs.gov/bbl/manual/reg.cfm
  out$ST[is.na(out$ST) & out$SNo %in% c(414)] <- "CA"
  
  # Code NA month and day to 0
  out$HMonth[is.na(out$HMonth)] <- 0
  out$HDay[is.na(out$HDay)] <- 0
  
  # remove out of season months .... 
  # (not sure if need to remove 0 and/or NA ... Bob Raftovich suggested leaving in, month and day are unknown ... only 1-2%)
  
  # Filter and format for output ....
  out <- out %>% filter(!(HMonth %in% c(4:8)))
  
  out$ST <- as.character(out$ST)
  out$Taxa <- as.character(out$Taxa)
  out$Spec <- as.character(out$Spec)
  out$CommonName <- as.character(out$CommonName)
  
  out
}
