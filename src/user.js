function User(){
    
    this.name = '',

    this.setName = function(name) {

        this.name = name;
    };

    this.getName = function() {
        
        return this.name
    }
}

export default User