export default function (module) {
  module.directive('fitnessFooter', function () {
    return ({
      template: `
      <footer>
        <div class="container">
          <a href="#" class="scrollpoint sp-effect3">
            <img src="logo.png" alt="" class="logo">
          </a>
          <div class="social">
            <a href="https://www.youtube.com/channel/UCC_pPGQBC69uzt1tOrYhQkw" target="_blank"
               class="scrollpoint sp-effect3"><i class="fa  fa-youtube-square fa-lg"></i></a>
            <a href="https://vk.com/public99211814" target="_blank" class="scrollpoint sp-effect3"><i
                class="fa fa-vk fa-lg"></i></a>
            <a href="https://www.facebook.com/groups/776830325762913" target="_blank" class="scrollpoint sp-effect3"><i
                class="fa fa-facebook fa-lg"></i></a>
          </div>
          <div class="rights">
            <p>Copyright &copy; 2016</p>
            <p>Lviv Fitness Weekend</p>
          </div>
        </div>
      </footer>
      `
    });
  });
}