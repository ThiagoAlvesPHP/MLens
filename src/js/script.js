$(function(){
	$(document).ready(function(){
		var mlensing = $('.mlensing');

		mlensing.mlens(
			{
				imgSrc: mlensing.attr("data-big"),
				imgSrc2x: mlensing.attr("data-big2x"),
				lensShape: "square", /*FORMATO DA LUPA circle/square*/
				lensSize: 200, /*QUADRADO PERFDEITO*/
				borderSize: 4 , /*EXPESSURA DA BORDA*/
				borderColor: "#fff", /*COR DA BOSRDA*/
				borderRadius: 5, /*ARREDONDAR BORDAS*/
				overlayAdapt: true,
				zoomLevel: 2, /*QUANTO DE ZOOM*/
				responsive: true /*RESPONSIVIDADE*/
			}
		);
	});
});