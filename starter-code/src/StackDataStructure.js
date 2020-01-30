class StackDataStructure {
    constructor() {
        this.stackControl = [];
        this.MAX_SIZE = 20;
    }

    isEmpty() {
        if(this.stackControl.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    canPush() {
        if(this.stackControl.length === this.MAX_SIZE){
            return false;
        } else {
            return true;
        }
    }

    push(element) {
        console.log(this.stackControl);
        if (this.canPush()) {
            this.stackControl.push(element);
            return this.stackControl;
        } else {
            //console.log('Stack Overflow');
            return 'Stack Overflow';
        }
        
        
    }

    pop() {
        if(this.isEmpty()) {
            console.log('Stack Underflow');    
            return 'Stack Underflow'; 
        } else {
            return this.stackControl.pop();
        }
    }


}


