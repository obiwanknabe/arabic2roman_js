/**
  * Takes arabic number and converts it to roman and 
  * returns the string value of it.
  * 
  * @param  {number} num Arabic number to be converted
  * @returns string}      Roman numeral representation of 'num'
  * /
  * const convert = num => {
  *     //create an empty string variable to hold our roman numeral output
  *     let roman = ' '
  *     //divide by 5 and check the remainder
  *     const mod5 = num % 5
  *     // is mod5 between 1 and 3?
  *     if (mod5 >= 1 && mod5 <= 3) {
  *         //is this a 6,7, or 8 scenario
  *         if ((num-mod5)) % 10 !==0) {
  *         //yes, so add roman numeral V before the I,II, or III
  *         roman += 'V'
  *         }
  *         //add I, II, or III to roman
  *         for (let i = 0; i < mod5; i++) {
  *             roman += 'I'
  *         }
  *     } else if (mod5 === 4) {
  *     // is mod5 4?
  *     roman += (num + 1) % 10 !== 0 ? 'IV' : 'IX'
  *     } else if (mod5 === 0) {
  *     roman += num % 10 !==0 ? 'V' : 'X'
  *     }
  * 
  *     // return our parsed roman numeral
  *     return roman
  *    }
  * 
  *     module.exports = {
  *         convert
  *     }
  * */

