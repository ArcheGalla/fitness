export default function (module) {
  module.directive('navMenu', function () {
    return ({
      template: `
      <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
        <div class="container">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1">
              <span class="fa fa-bars fa-lg"></span>
            </button>
            <a class="navbar-brand" href="#top">
              <img src="logo.png" alt="" class="fitness weekend">
            </a>
          </div>
  
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
              <li>
                <a href="#top">Головна</a>
              </li>
              <li>
                <a href="#organizers">Організатори</a>
              </li>
              <li>
                <a href="#convention">Конвенція</a>
              </li>
              <li>
                <a href="#workshops">Семінари</a>
              </li>
              <li>
                <a href="#demo">Форум</a>
              </li>
              <li>
                <a href="#partners">Партнери</a>
              </li>
              <li>
                <a href="#location">Локація</a>
              </li>
              <li>
                <a href="#contacts">Контакти</a>
              </li>
            </ul>
          </div>
          <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-->
    </nav>`
    });
  });
}