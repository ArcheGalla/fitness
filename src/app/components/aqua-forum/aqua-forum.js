export default  function (module) {
    module.directive('nameOfDirective',function () {
        return ({
            template: `<div>Hello World</div>`
        });
    });
}