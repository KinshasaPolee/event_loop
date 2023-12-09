// Part 1: Stack Overflow
var counter = 0;

function incrementAndCall() {
    counter++;

    if(counter >= 1500) {

        console.log('Error condition reached!');
        return;
    }

    try {

        incrementAndCall();

    } catch (error) {

        console.error('Error: ${error.message}');
        console.log('Counter Value: ${counter}');
    } finally {

    }
}

incrementAndCall();