# EDIT-THIS-README
#HTML Needs
1)three radio buttons (R,P,S)
    -images for rps
    -radio buttons need same name category
    -radio buttons need diffrerent values (for rps)
2)'THROW' Button (with id)
3) empty divs
    -computer throw 
    -wins
    -loses
    -total
    


#Javascript Needs
1)grab the DOM elements by id
2)itialize the states we need
    -wins: 0
    -total: 0
        -later-> total - wins = loses
3)add event listeners to the button
    -on click
        1)store what the computer shot
            -need a 'computer shoot' that lands randomly on RPS (1,2,3)
            -math.round(Math.random()*3) will go between 1 and 3
            -make 1 rock and 2 paper 3 sissors
        2)store the user shoot
            -grab the checked input and get its value
        3)compare the user shoot to computer shoot
        4)display the result of the match