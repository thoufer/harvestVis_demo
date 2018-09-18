### Steps to create data for harvest survey visualization page
#### 6-Sept-2018, E Silverman

*00createStateHuntingStats_graphic1.R* in *harvestVis_demo\data* folder includes the command code to create the data files. 

##### Code and functions to create States.csv file for Graphic 1 ().

1. **01createDiaryDataSummary.fn** [*createDiaryDataSummary_fn_graphic1.R* in *harvestVis_demo\data* folder] pulls the data from a table named dbo.DkGsEsts_ESilverman, created by R Raftovich. Should redo to create directly from the Harvest Diary survey database, not via this table.
These data are for Graphic 1 (number of hunters, avg bag and days afield).
Output diaryData_10yr_2017 includes Season (yr), St, DuckDays, DuckHunters, Duck_BPH, GooseDays, GooseHunters, and Goose_BPH and is created by connecting to the "harvest_data" DB. 

2. **02createPCSDataFrame.fn** [*createPCSDataFrame_fn.R* in *harvestVis_demo\data* folder] pulls data from a table named dbo.wPCS_ESilverman, created by R Raftovich. Should redo to create directly from the Harvest Diary survey database, not via this table.
Output dataframe is by PartID for selected years (interval) up to the last Season entered in the table.

3. **03createPCSStateTaxaSummary.fn** [*createPCSStateTaxaSummary_fn_graphic1.R* in *harvestVis_demo\data* folder] takes output from **createPCSDataFrame.fn** (PCS data by part, subset and cleaned) and creates a data frame with state, duck harvest rank, and goose harvest rank (rank 1 = highest).

4. **04createHarvestCompositionData.fn** [*createHarvestCompositionData_fn_graphic1.R* in *harvestVis_demo\data* folder] reads in output from createPCSDataFrame.fn and identifies top species harvested by state for selected Taxa. 
Output is a dataframe with state, top X duck/geese species separated by ";" and percentHarvest by species, separated by ";"

##### Code and functions to create Counties.csv file for Graphic 3 (Waterfowl Harvest By County).

Begin with output dataframe from **02createPCSDataFrame.fn**.

5. Run code in *05createCountyHarvestStats_graphic3.R.* Reads in CountyNames_fips.csv and uses data frame from **02createPCSDataFrame.fn**. 

 
 

