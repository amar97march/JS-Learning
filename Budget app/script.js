//       ***Controllers***
//BUDGET CONTROLLER
var budgetController = (function(){
    
    var Expense = function (id, description, value){
        this.id = description;
        this.description = description;
        this.value = value;
    }
    
    var Income = function (id, description, value){
        this.id = description;
        this.description = description;
        this.value = value;
    }
    
    data = {
        allItems: {
            inc : [],
            exp : []
        },
        totals : {
            income : 0,
            expenses : 0
        }
    }
    
})();

//UI CONTROLLER
var uiController = (function (){
    
    var DOMStrings  = {
        addType : '.add__type',
        addDescription : '.add__description',
        addValue : '.add__value',
        addBtn : '.add__btn',
        
         
    }
    
    return {
        getInput : function(){
            return {
                type : document.querySelector(DOMStrings.addType).value,
                description : document.querySelector(DOMStrings.addDescription).value,
                value : document.querySelector(DOMStrings.addValue).value     
            };
                
        },
        getDOM : function() {
            return DOMStrings;
        }
    };
    
})();

// GLOBAL APP CONTROLLER
var controller = (function(bc,uc){
    
    var setupEventListeners = function(){
        
        var DOM = uc.getDOM();
        
        document.querySelector(DOM.addBtn).addEventListener('click', addItem);
    
        document.querySelector(DOM.addValue).addEventListener('keypress',function(event){
            if (event.keyCode == 13){
                addItem(); 
            }
        })
    };
    
   
    
    var addItem = function(){
        
        var input = uc.getInput();
        //TODO:
        //1. Get the input from field
        //2. add item to budget controller
        //3. add item to the UIController
        //4. calculate the budget 
        //5. display the budget
        
    };
    
    return {
        init : function(){
            
            setupEventListeners();
        }
    };
    
})(budgetController,uiController);


controller.init();