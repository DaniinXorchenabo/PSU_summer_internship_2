class Graphics {
    // =======! private fields !=======
    #baseId;
    #myself_input_item;
    #myself_choice_color_input_item;

    // =======! getters !=======
    get baseId() {
        return this.#baseId;
    }

    get my_color() {
        return this.#myself_choice_color_input_item.value;
    }

    // =======! constructors !=======
    constructor(base_id) {
        this.#baseId = base_id;
        Graphics.allObjects.push(this);
        this.#graw_text_field();
        this.#myself_input_item = document.getElementById('input_' + this.baseId)
        this.#myself_choice_color_input_item = document.getElementById('input_' + this.baseId + '_choice_color')

    }

    // =======! public methods !=======
    create_graph_data() {
        return this.#myself_input_item.value
            .toString()
            .replace(',', ' ')
            .split(' ')
            .map(x => x.replace(" ", ''))
            .map(Number);
    }


    // =======! private methods !=======
    #graw_text_field() {

        const new_input_item = document.createElement("input");
        new_input_item.id = 'input_' + this.baseId;
        new_input_item.value = "0 0";
        new_input_item.placeholder = 'через запятую, начиная с нулевой степени';
        new_input_item.oninput = corrected_a_set_of_numbers;
        new_input_item.onchange = corrected_a_set_of_numbers;

        const new_color_input = document.createElement("input");
        new_color_input.id = 'input_' + this.baseId + '_choice_color';
        new_color_input.type = 'color'

        const new_input_box = document.createElement("div");
        new_input_box.className = 'input_box';
        new_input_box.appendChild(new_input_item);
        new_input_box.appendChild(new_color_input);

        const new_item = document.createElement("div");
        new_item.className = 'array_box';
        new_item.appendChild(new_input_box);

        const item = document.getElementById(Graphics.#inputContainerId);
        item.insertBefore(new_item, [...item.children][item.children.length - 2]);

    }

    //  =======! private static fields !=======
    static #allObjects = [];
    static #inputContainerId = "input_content";

    // =======! static getters !=======
    static get allObjects() {
        return Graphics.#allObjects;
    }

    // =======! public static methods !=======
    static CreateNewObject(event) {
        console.log('---');
        new Graphics('' + Graphics.allObjects.length + 1);
    }

    static DrawGraph(event) {

        const graph_data = Graphics.allObjects
            .map(x => [x.create_graph_data(), x])
            .map(([x, obj]) => Object.assign(
                {mode: 'lines', line: {color: obj.my_color}},
                {
                    x: [...Object.keys(x)].map(Number),
                    y: [...Object.values(x)].map(Number),
                    name: 'Данные из строки под номером ' + obj.baseId
                }));

        console.log(graph_data);

        const layout = {
            title: "График",
            uirevision: 'true',
            xaxis: {autorange: true},
            yaxis: {autorange: true}
        };
        layout.xaxis.autorange = true;
        layout.yaxis.autorange = true;

        Plotly.react('graph_task1', graph_data, layout);


    }


}