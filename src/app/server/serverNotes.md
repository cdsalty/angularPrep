Instead of using an external template file, you can also you as an in-line template file. 
    - an in-line template file is where you define the html code, in the TypeScript file 

        - in servers.component.ts:
            - change 'templateUrl:' to 'template:' 
            - use single-line ( quotation marks, '  ') or multi-line (w/ back-ticks, ` `)
            
            - SINGLE-LINE:
                - template: '<app-server></app-server><app-server></app-server>'

            - MULTI-LINE:
                - template: `
                    <app-server></app-server>
                    <app-server></app-server>`

            - TL:DR; use external; internal is if you only have one or two lines of code.




            
** sideNote: Every component will and must have a template property **


STRING INTERPOLATION {{}}