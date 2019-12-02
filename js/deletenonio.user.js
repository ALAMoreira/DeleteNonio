// ==UserScript==
// @name         Delete Nonio Popup
// @author       dippas
// @namespace    https://github.com/dippas/DeleteNonio/
// @homepage     https://github.com/dippas/DeleteNonio/
// @description  Delete annoying popup for nonio registration - Privacy issues
// @version      0.2.0
// @supportURL   https://github.com/dippas/DeleteNonio/issues
// @match        https://*.aquelamaquina.pt/*
// @match        https://*.xl.pt/*
// @match        https://*.publico.pt/*
// @match        https://*.sapo.pt/*
// @match        https://*.blitz.pt/*
// @match        https://*.visao.pt/*
// @match        https://*.expressoemprego.pt/*
// @match        https://*.cm-tv.pt/*
// @match        https://*.cmjornal.pt/*
// @match        https://*.record.pt/*
// @match        https://*.jornaldenegocios.pt/*
// @match        https://*.jn.pt/*
// @match        https://*.dn.pt/*
// @match        https://*.tsf.pt/*
// @match        https://*.sabado.pt/*
// @match        https://*.ojogo.pt/*
// @match        https://*.dinheirovivo.pt/*
// @match        https://*.iol.pt/*
// @match        https://*.flash.pt/*
// @match        https://*.vidas.pt/*
// @match        https://*.maxima.pt/*
// @match        https://*.sic.pt/*
// @match        https://*.sicnoticias.pt/*
// @match        https://*.famashow.pt/*
// @match        https://*.sickapa.pt/*
// @match        https://*.sicradical.pt/*
// @match        https://*.sicmulher.pt/*
// @match        https://*.siccaras.pt/*
// @grant        none
// ==/UserScript==

const deleteNonio = {
	el: {
		html: document.documentElement,
		body: document.body
	},

	events() {
		this.el.html.style = 'overflow: auto !important';
		this.el.body.style = 'overflow: auto !important';
		document.querySelectorAll('#imp-content-gate-root')[0] ? document.querySelectorAll('#imp-content-gate-root')[0].outerHTML = '' : '';
		document.querySelectorAll('[id^="layer_gatting"]')[0] ? document.querySelectorAll('[id^="layer_gatting"]')[0].outerHTML = '' : '';
		document.querySelectorAll('.nonioBox')[0] ? document.querySelectorAll('.nonioBox')[0].outerHTML = '' : '';
		document.querySelectorAll('.warning-nonio-overlay')[0] ? document.querySelectorAll('.warning-nonio-overlay')[0].outerHTML = '' : '';
		document.querySelectorAll('.tp-modal')[0] ? document.querySelectorAll('.tp-modal')[0].outerHTML = '' : '';
		document.querySelectorAll('.tp-backdrop')[0] ? document.querySelectorAll('.tp-backdrop')[0].outerHTML = '' : '';
		document.querySelectorAll('.tp-iframe-wrapper')[0] ? document.querySelectorAll('.tp-iframe-wrapper')[0].outerHTML = '' : '';
		if (document.querySelectorAll('#wrapperContentGatingNonio')[0]) {
			document.cookie.split(';').forEach(el => {
				document.cookie = el.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`)
			})
			//needs refresh afterwards
		}
	},

	slowerEvents() {
		document.querySelectorAll('#imp-content-gate-root')[0] ? document.querySelectorAll('#imp-content-gate-root')[0].outerHTML = '' : '';
	},

	init() {
		window.onload = () => {
			setTimeout(() => this.events(), 100);
			setTimeout(() => this.slowerEvents(), 4000);
		}
	}
}
deleteNonio.init();