

class Graphics{
    // =======! private fields !=======
    #baseId

    // =======! getters !=======
    get baseId(){
        return this.#baseId;
    }

    // =======! constructors !=======
    constructor(base_id){
        this.#baseId = base_id;
        Graphics.allObjects.push(this);
        this.#graw_text_field();

    }

    // =======! public methods !=======


    // =======! private methods !=======
    #graw_text_field(){
        const item = document.getElementById(Graphics.#inputContainerId);
        const new_input_item = document.createElement("input");
        new_input_item.id = 'input_' + this.baseId;
        new_input_item.value = "";
        new_input_item.placeholder = 'через запятую, начиная с нулевой степени';
        new_input_item.oninput = corrected_a_set_of_numbers;
        new_input_item.onchange = corrected_a_set_of_numbers;

        const new_item = document.createElement("div");
        new_item.className = 'array_box';
        new_item.appendChild(new_input_item);
        item.insertBefore(new_item, [...item.children][item.children.length - 2]);

    }

    //  =======! private static fields !=======
    static #allObjects = [];
    static #inputContainerId = "input_content";

    // =======! static getters !=======
    static get allObjects(){
        return Graphics.#allObjects;
    }

    // =======! public static methods !=======
    static CreateNewObject(event){
        console.log('---');
        new Graphics('' + Graphics.allObjects.length);
    }

    static DrawGraph(event){

    }



}