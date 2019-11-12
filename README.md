# Uncle Pont's 1v1 (as of 12.2018)

## Technical Summary
```
Vue.js dynamic web app populated with REST API JSON Data from Riot Games endpoint.
```

## Intent
```
This is a tool for players of League of Legends to help determine best counter picks, 
and itemization to achieve greater success in game.
```

### Revision History
```
12.22.2018  Started with base Vue.js project.  
            Set up logo, landing page, frame of child componets

12.23 - Finished API Call for champ selector

12.24 - v-if and CSS style for child (champ) components added

12.25 - Corrected API calls to use normalized name (no special characters).  
        Added grandchild (sheet) component for stats.  
        Stats itterate by level. 
        
        (CSS:1, Joe: 0)
```

### Screenshots
```
Data bound v-select from API CALL.  JSON from the call showing as a validation test.
```
![Rest call working](https://github.com/AverageJoe007/lol_1v1me/blob/master/src/assets/RESTAPICall.PNG)

```
Early validation test of element (with v-if) and JSOM object in console.log()
```
![data with v-if](https://github.com/AverageJoe007/lol_1v1me/blob/master/src/assets/v-ifeffect.PNG)

```
Stats iterate by level
```
![stats adjusted for leve](https://github.com/AverageJoe007/lol_1v1me/blob/master/src/assets/stats-iteration.PNG)