function decodeBinary(binary){

    // i need to Split the binary  into an array of letters.
    
    binary = binary.split(' ');
      //to revrs the url that i stored into the array 
    binary = binary.reverse();
    
    
    // Iterate over the elements of the new array create to change each element to a decimal
    binary = binary.map(elem => parseInt(elem,2));
    
    
    // Use String.fromCharCode with .map() to change each element of the array to text 
    binary = binary.map(elem => String.fromCharCode(elem));
    
    // Add the element of the new arry together to create a string. Save it to a new Variable.
    let newText = binary.join("")
    
     
    // The new string is returned
    return newText
      
    }
    
    console.log(decodeBinary("01101100 01101100 01100001 00101111 00110001 00101110 00110011 01110110 00101111 01101101 01101111 01100011 00101110 01110011 01100101 01101001 01110010 01110100 01101110 01110101 01101111 01100011 01110100 01110011 01100101 01110010 00101111 00101111 00111010 01110011 01110000 01110100 01110100 01101000"));