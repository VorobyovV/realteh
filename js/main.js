$(document).ready(function() {
	var ticker = document.querySelector('.ticker'),
		list = document.querySelector('.ticker__list'),
		clone = list.cloneNode(true)

	ticker.append(clone)

	$('.faq__header').click(function() {
		if ($(this).hasClass('active')) {
			$(this).toggleClass('active')
			$(this).removeClass('active')
			$(this).next().slideUp(300)
		} else {
			$('.faq__header').removeClass('active')
			$('.faq__body').slideUp(300)
			$(this).toggleClass('active')
			$(this).next().slideToggle(300)
		}
	})

	$('.burger').click(function() {
		$(this).children().toggleClass('active')
		$('.header__drop').toggleClass('active')
		$('body').toggleClass('fixed')
		return false
	})

	$(window).scroll(function() {
		if ($(this).scrollTop() > 500) {
			$('.arrow__scroll').fadeIn(500)
		} else {
			$('.arrow__scroll').fadeOut(500)
		}
	})
	$('.arrow__scroll').click(function(event) {
		event.preventDefault()
		$('html, body').animate({ scrollTop: 0 }, 500)
	})

	$('.header__list li a').on('click', function() {
		var $el = $(this),
			id = $el.attr('href')
		$('html, body').animate(
			{
				scrollTop: $(id).offset().top - 100
			},
			500
		)
		return false
	})

	$('.showcase__end .showcase__btn').on('click', function() {
		var $el = $(this),
			id = $el.attr('href')
		$('html, body').animate(
			{
				scrollTop: $(id).offset().top - 100
			},
			500
		)
		return false
	})

	$('.mechanism__point').on('click', function() {
		var $el = $(this),
			id = $el.attr('href')
		$('html, body').animate(
			{
				scrollTop: $(id).offset().top - 10
			},
			500
		)
		return false
	})

	$(window).scroll(function() {
		var sc = $(window).scrollTop()
		if (sc > 450) {
			$('.header').addClass('show')
		} else {
			$('.header').removeClass('show')
		}
		if (sc > 300) {
			$('.header').addClass('dop')
		} else {
			$('.header').removeClass('dop')
		}
	})

	var textarea = document.querySelector('textarea');

textarea.addEventListener('keyup', function(){
  if(this.scrollTop > 0){
    this.style.height = this.scrollHeight + "px";
  }
});

	$('.header__list li a').click(function() {
		$('.header__drop').removeClass('active')
		$('.burger').removeClass('active')
		$('body').removeClass('fixed')
	})

	$(document).on('click', function(e) {
		if (!$(e.target).closest('.burger, .header__list li a').length) {
			$('body').removeClass('fixed')
			$('.burger').removeClass('active')
			$('.header__drop').removeClass('active')
		}
		e.stopPropagation()
	})

	$('#modal').on('submit', function(e) {
		e.preventDefault()
		$('.thanks-hidden').trigger('click')
	})

	$('#modal-second').on('submit', function(e) {
		e.preventDefault()
		$('.thanks-hidden-second').trigger('click')
	})

	$('#faq').on('submit', function(e) {
		e.preventDefault()
		$('.thanks-hidden').trigger('click')
	})

	if ($(window).width() > 767) {
		$('[data-animate]').each(function() {
			$(this).css('opacity', 0).addClass('animate__animated')
			var name_animation = $(this).attr('data-animate')
			var delay = $(this).attr('data-animate-delay')
			var that = $(this)

			$(window).on('scroll', function() {
				if (
					$(window).scrollTop() + $(window).height() >
					that.offset().top + 100
				) {
					setTimeout(function() {
						that.css('opactiy', 1).addClass(name_animation)
					}, delay * 1000)
				}
			})
		})
	}

	var text =
		'Закрытый паевой инвестиционный фонд недвижимости «РиалТех» - уникальный проект, в рамках которого выбор объектов недвижимости для инвестирования осуществляется с помощью нейросети, обученной на 26-летнем опыте работы агентства недвижимости'
	var delay = 40
	var elem = document.getElementById('mechanism__head')

	var print_text = function(text, elem, delay) {
		if (text.length > 0) {
			elem.innerHTML += text[0]
			setTimeout(function() {
				print_text(text.slice(1), elem, delay)
			}, delay)
		}
	}
	print_text(text, elem, delay)
})
