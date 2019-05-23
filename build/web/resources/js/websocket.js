/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var webSocket = new WebSocket("ws://localhost:8084/Budgetlanka-Pro/adm");

webSocket.onopen = function (message) {
    openProcessing(message);
};
webSocket.onmessage = function (message) {
    messagemProcessing(message);
};
webSocket.onclose = function (message) {
    closeProcessing(message);
};
webSocket.onerror = function (message) {
    errorProcessing(message);
};

function openProcessing(message) {
    console.log(message);
}

function messagemProcessing(message) {
    alert('s');
    alertify.log("You Received A Message..!");
}

function closeProcessing(message) {
    console.log(message);
}

function errorProcessing(message) {
    console.log(message);
}

$("#fort").click(function () {
    webSocket.send("");
});