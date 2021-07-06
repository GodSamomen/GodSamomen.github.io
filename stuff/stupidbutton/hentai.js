function gerizekalıWebButton(button, popup) {
	var buttonElement = button
	var popupElement = popup
	var initialClick = false
	var randomRange = 7

	var sitesList = [
		"https://longdogechallenge.com/",
		"http://heeeeeeeey.com/",
		"http://corndog.io/",
		"https://mondrianandme.com/",
		"https://puginarug.com",
		"https://alwaysjudgeabookbyitscover.com",
		"https://thatsthefinger.com/",
		"https://cant-not-tweet-this.com/",
		"https://weirdorconfusing.com/",
		"http://eelslap.com/",
		"http://www.staggeringbeauty.com/",
		"http://burymewithmymoney.com/",
		"https://smashthewalls.com/",
		"https://jacksonpollock.org/",
		"http://endless.horse/",
		"https://www.trypap.com/",
		"http://www.republiquedesmangues.fr/",
		"https://www.instagram.com/bbuserddem/",
        "http://www.movenowthinklater.com/",
		"http://www.partridgegetslucky.com/",
		"http://www.rrrgggbbb.com/",
		"http://beesbeesbees.com/",
		"http://www.koalastothemax.com/",
		"http://www.everydayim.com/",
		"http://randomcolour.com/",
		"http://cat-bounce.com/",
		"http://chrismckenzie.com/",
		"https://thezen.zone/",
		"http://hasthelargehadroncolliderdestroyedtheworldyet.com/",
		"http://ninjaflex.com/",
		"http://ihasabucket.com/",
		"http://corndogoncorndog.com/",
		"http://www.hackertyper.com/",
		"https://pointerpointer.com",
		"http://imaninja.com/",
		"http://drawing.garden/",
		"http://www.ismycomputeron.com/",
		"http://www.nullingthevoid.com/",
        "https://www.instagram.com/mendeburlemur/",
        "http://www.muchbetterthanthis.com/",
		"http://www.yesnoif.com/",
		"http://lacquerlacquer.com",
		"http://potatoortomato.com/",
		"http://iamawesome.com/",
		"https://strobe.cool/",
		"http://www.pleaselike.com/",
		"http://crouton.net/",
		"http://corgiorgy.com/",
		"http://www.wutdafuk.com/",
		"http://unicodesnowmanforyou.com/",
		"http://chillestmonkey.com/",
		"http://scroll-o-meter.club/",
		"http://www.crossdivisions.com/",
		"http://tencents.info/",
		"https://boringboringboring.com/",
		"http://www.patience-is-a-virtue.org/",
		"http://pixelsfighting.com/",
		"http://isitwhite.com/",
		"https://existentialcrisis.com/",
		"http://onemillionlols.com/",
		"http://www.omfgdogs.com/",
		"http://oct82.com/",
		"http://chihuahuaspin.com/",
		"http://www.blankwindows.com/",
		"http://dogs.are.the.most.moe/",
		"http://tunnelsnakes.com/",
		"http://www.trashloop.com/",
		"http://www.ascii-middle-finger.com/",
		"http://spaceis.cool/",
		"http://www.donothingfor2minutes.com/",
		"http://buildshruggie.com/",
		"http://buzzybuzz.biz/",
		"http://yeahlemons.com/",
		"http://wowenwilsonquiz.com",
		"https://thepigeon.org/",
		"http://notdayoftheweek.com/",
		"http://www.amialright.com/",
		"http://nooooooooooooooo.com/",
		"https://greatbignothing.com/",
		"https://zoomquilt.org/",
		"https://dadlaughbutton.com/",
		"https://www.bouncingdvdlogo.com/",
		"https://remoji.com/",
		"http://papertoilet.com/",
	]

	var sites = null


	var init = function () {
		button.onclick = onButtonClick


		sites = sitesList.slice()

		if (localStorage["currentSiteList"]) {
	
			var currentSites = JSON.parse(localStorage["currentSiteList"])
			var filteredSites = currentSites.filter(
				(site) => sitesList.indexOf(site) !== -1
			)
			if (filteredSites.length > 0) {
				sites = filteredSites
			}
		}
	}


	var selectWebsite = function () {
		var site, range, index

		range = randomRange > sites.length ? sites.length : randomRange
		index = Math.floor(Math.random() * range)

		site = sites[index]
		sites.splice(index, 1)

		return site
	}

	var openSite = function (url) {
		window.open(url)
	}

	var onButtonClick = function () {
		if (window.gtag) {
			gtag("event", "click", { event_category: "button" })
		}

		if (initialClick === false) {
	
			document.getElementById("joint").innerHTML = "Ben luv u";
			initialClick = true
		}

		var url = selectWebsite()
		openSite(url)

	
		if (sites.length == 0) {
			sites = sitesList.slice()
		}

		localStorage["currentSiteList"] = JSON.stringify(sites)
	}

	init()
}

var gerizekalıWebButton = new gerizekalıWebButton(document.getElementById("button"))