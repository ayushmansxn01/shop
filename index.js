
$('.buy').click(function(){
    $('.login').show(1000);
})

$('.xx').click(function(){
    let login = $('.login').hide(1000);
})
        async function loader(){
          $('#loader').hide(1000);
        }
        setTimeout(loader,1000);
    const megamove = () =>{
        let mega = document.getElementById('mega');
        anime({
  targets: '#mega',
  keyframes: [
    {translateY: -4},
    {translateX: 30},
    {translateX: 0},
    {translateY: 0},
    {translate: 2}
  ],
  duration: 4000,
  easing: 'easeOutElastic(1, .8)',
  loop: true
});
    }
    megamove();
