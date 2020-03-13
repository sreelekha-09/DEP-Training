//http://www.codewars.com/kata/can-you-keep-a-secret


function createSecretHolder(secret) {
    var obj = {
        setSecret: function (n) {
            secret = n;
        },
        getSecret: function () {
            return secret;
        }
    };
    return obj;
}