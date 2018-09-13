# Summarize PCS data by state for Graphic 1
#
# @inData ... PCS data by part for summary
#
# output is duck and goose harvest ranks (1 = highest)
#
createPCSStateTaxaSummary.fn <- function(inData) {
  
  library(tidyverse)
  
  interval <- diff(range(inData$Season)) + 1
  
  # summarized ducks, geese by state
  out <- inData %>% group_by(ST, Taxa) %>% summarise(avg_harvest = sum(Wt)/interval) %>% select(ST, Taxa, avg_harvest)
  
  # rank states by harvest, 1 = highest
  out <- out %>% group_by(Taxa) %>% mutate(rank_harvest = rank(-avg_harvest)) 
  
  out <- spread(out[,-3],"Taxa","rank_harvest") # Note that this drops avg_harvest and outputs only rank
  
  names(out)[2:3] <- c("rankDuck","rankGeese")
  
  out

}