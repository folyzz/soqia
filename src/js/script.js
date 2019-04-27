$(document).ready(function(){
    $('.custom-bars').click(function(){
        $('.custom-bars').toggleClass('active');
    });
    
    $(function() {
        $('.validity').validity()
        .on('submit', function(e) {
            var $this = $(this),
            $btn = $this.find('[type="submit"]');
            $btn.button('loading');
            if (!$this.valid()) {
                e.preventDefault();
                $btn.button('reset');
            }
        });
    });
});