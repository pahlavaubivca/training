/**
 * Created by pahlava on 31.07.2016.
 */

function Shape() {
    var thisScope = this;
    this.scope = {
        customerParams: {},
        build: function (array, context) {
            for (var i = 0; i < array.length; i++) {
                if (i == 0) {
                    context.moveTo(array[i][0], array[i][1]);
                } else {
                    context.lineTo(array[i][0], array[i][1])
                }
            }
        }
    };
}
Shape.prototype.draw = function () {
    var param = this.scope.customerParams,
        userCTX = param.canvas.context;
    userCTX.beginPath();
    if (param.points)this.scope.build(param.points, userCTX);
    userCTX.closePath();
    userCTX[param.canvas.method]();
};
Shape.prototype.setParameters = function (param) {
    this.scope.customerParams = param;
};

