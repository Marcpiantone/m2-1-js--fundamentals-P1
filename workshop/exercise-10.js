// Q10
// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

for (let num = 0; num <= 6; num++){
    let triangle = '#';
    for (let x = 1 ; x <= num; x++) {
        triangle += '#';
    }
    console.log(triangle);

}
