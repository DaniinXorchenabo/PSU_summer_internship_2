
const corrected_a_set_of_numbers = (event) => {
    "use strict"; // для браузеров с поддержкой строгого режима
    const input_id = event.target.id;
    let val = document.getElementById(input_id).value.toString();
    const testing_num = /^(?:\s*[-]?[0-9]+(?:[.][0-9]+)?\s*[,]?\s*)+$/;
    const edit_num = /^(?:\s*[-]?[0-9]+(?:[.][0-9]+)?\s*[,]?\s*)+/;
    if (!testing_num.test(val)) {
        if (edit_num.test(val)) {
            document.getElementById(input_id).classList.add("error")
        } else {
            document.getElementById(input_id).classList.add("error");

        }
    } else {
        document.getElementById(input_id).classList.remove("error");
    }
    document.getElementById('send_button').disabled = !!get_all_input_items(event).some(i => i.classList.contains("error"));

}
