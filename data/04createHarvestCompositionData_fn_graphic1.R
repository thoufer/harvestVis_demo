# Summarize last X yrs of harvest data by state and spp composition, top Y species hunted is output per state
#
# Input file is already subset to 10 yr interval of interest
# ST is state column name
# Spec is species column name
# Taxa is taxa column name
# Wt is harvest weight column name
#
# Input:
# taxa can be "All," "Ducks" or "Geese"
# top.n = number of "top harvested" species to output 

createHarvestCompositionData.fn <- function(inData,select.taxa="ALL",top.n=3) {
  
  # default is top 3 species harvested by state for 10 years from 2007-2016
  
  library(tidyverse)
  
  out <- inData
  interval <- diff(range(inData$Season)) + 1
  
  if (select.taxa %in% c("Ducks","Geese"))  {   # select taxa
    out <- out %>% filter(Taxa == select.taxa)
  } 
  
  out <- out %>% group_by(ST,Spec) %>%
    summarize(harvest = sum(Wt)/interval) %>%
    mutate(propHarvest = harvest/sum(harvest)) %>%
    mutate(rank = rank(-propHarvest)) %>%
    mutate(percentHarvest = round(100*propHarvest)) %>%
    select(ST, Spec, rank, percentHarvest)
  

  out<-out[out$rank<(top.n+1),]
  out<-out[order(out$ST,out$rank),]
  
  out <- left_join(out, unique(inData[,c("Spec","CommonName")]))
  
  # shorten names:
  out$CommonName <- gsub("American ","",out$CommonName)
  out$CommonName <- gsub("Northern ","",out$CommonName)
  out$CommonName <- gsub("/Cinnamon ","",out$CommonName) # bwte and cite are combined by PCS, vast majority are bwte
  
  out <- out %>% group_by(ST) %>% summarize(species = paste(CommonName, collapse=";"), percentHarvest = paste(percentHarvest, collapse = ";")) # create ";" separated string columns
  
} 
