//	HYPE.documents["599CD Logo"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "599CD%20Logo_Resources";
	var documentName = "599CD Logo";
	var documentLoaderFilename = "599cdlogo_hype_generated_script.js";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE == "undefined") {
		if(typeof window.HYPE_DocumentsToLoad == "undefined") {
			window.HYPE_DocumentsToLoad = new Array();
			window.HYPE_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	var attributeTransformerMapping = {"BorderColorRight":"ColorValueTransformer","BackgroundColor":"ColorValueTransformer","BorderWidthBottom":"PixelValueTransformer","WordSpacing":"PixelValueTransformer","BoxShadowXOffset":"PixelValueTransformer","Opacity":"FractionalValueTransformer","BorderWidthRight":"PixelValueTransformer","BorderWidthTop":"PixelValueTransformer","BoxShadowColor":"ColorValueTransformer","BorderColorBottom":"ColorValueTransformer","FontSize":"PixelValueTransformer","BorderRadiusTopRight":"PixelValueTransformer","TextColor":"ColorValueTransformer","Rotate":"DegreeValueTransformer","Height":"PixelValueTransformer","PaddingLeft":"PixelValueTransformer","BorderColorTop":"ColorValueTransformer","Top":"PixelValueTransformer","BackgroundGradientStartColor":"ColorValueTransformer","TextShadowXOffset":"PixelValueTransformer","PaddingTop":"PixelValueTransformer","BackgroundGradientAngle":"DegreeValueTransformer","PaddingBottom":"PixelValueTransformer","PaddingRight":"PixelValueTransformer","Width":"PixelValueTransformer","TextShadowColor":"ColorValueTransformer","BorderColorLeft":"ColorValueTransformer","ReflectionOffset":"PixelValueTransformer","Left":"PixelValueTransformer","BorderRadiusBottomRight":"PixelValueTransformer","LineHeight":"PixelValueTransformer","BoxShadowYOffset":"PixelValueTransformer","ReflectionDepth":"FractionalValueTransformer","BorderRadiusTopLeft":"PixelValueTransformer","BorderRadiusBottomLeft":"PixelValueTransformer","TextShadowBlurRadius":"PixelValueTransformer","TextShadowYOffset":"PixelValueTransformer","BorderWidthLeft":"PixelValueTransformer","BackgroundGradientEndColor":"ColorValueTransformer","BoxShadowBlurRadius":"PixelValueTransformer","LetterSpacing":"PixelValueTransformer"};

var scenes = [{"timelines":{"kTimelineDefaultIdentifier":{"framesPerSecond":30,"animations":[{"startValue":"0deg","isRelative":true,"endValue":"360deg","identifier":"Rotate","duration":5,"timingFunction":"easeinout","type":0,"oid":"636B0DAF-9E96-4D64-BABC-691BD3A18070-17182-000045F518E489BD","startTime":0},{"startValue":"-218px","isRelative":true,"endValue":"3px","identifier":"Left","duration":5,"timingFunction":"easeinout","type":0,"oid":"1E0EF702-A06C-416A-9B32-7960901D6BDB-17182-000046112EC07B51","startTime":0},{"startValue":"0.000000","isRelative":true,"endValue":"1.000000","identifier":"Opacity","duration":5.0333333015441895,"timingFunction":"easeinout","type":0,"oid":"CA1C0381-DAD2-4178-9B25-3CEA136D6C36-17182-000046BCE9C6D8B2","startTime":0},{"startValue":"0.000000","isRelative":true,"endValue":"1.000000","identifier":"Opacity","duration":5.0333333015441895,"timingFunction":"easeinout","type":0,"oid":"E5068197-8523-4339-A897-50C4EEDF6F94-17182-000046A8FB5876A0","startTime":0}],"identifier":"kTimelineDefaultIdentifier","name":"Main Timeline","duration":5.0333333015441895}},"id":"2040A38A-988E-45E9-A4D6-C2C30B3572FD-17182-000045EABC06CEA4","sceneIndex":0,"perspective":"600px","oid":"2040A38A-988E-45E9-A4D6-C2C30B3572FD-17182-000045EABC06CEA4","initialValues":{"1E0EF702-A06C-416A-9B32-7960901D6BDB-17182-000046112EC07B51":{"Position":"absolute","BackgroundOrigin":"content-box","Left":"-218px","Display":"inline","BackgroundImage":"599CDcom.png","RotationAxis":"0","Height":"30px","Overflow":"visible","BackgroundSize":"100% 100%","ZIndex":"3","Top":"26px","Width":"215px","TagName":"div","Rotate":"360deg"},"E5068197-8523-4339-A897-50C4EEDF6F94-17182-000046A8FB5876A0":{"Position":"absolute","BackgroundOrigin":"content-box","Left":"98px","Display":"inline","BackgroundImage":"Computer.png","Height":"14px","Overflow":"visible","BackgroundSize":"100% 100%","ZIndex":"4","Top":"65px","Width":"75px","Opacity":"0.000000","TagName":"div"},"636B0DAF-9E96-4D64-BABC-691BD3A18070-17182-000045F518E489BD":{"Position":"absolute","BackgroundOrigin":"content-box","Left":"86px","Display":"inline","BackgroundImage":"CD.png","RotationAxis":"0","Height":"101px","Overflow":"visible","BackgroundSize":"100% 100%","ZIndex":"2","Top":"-1px","Width":"101px","TagName":"div","Rotate":"0deg"},"CA1C0381-DAD2-4178-9B25-3CEA136D6C36-17182-000046BCE9C6D8B2":{"Position":"absolute","BackgroundOrigin":"content-box","Left":"105px","Display":"inline","BackgroundImage":"Training.png","Height":"13px","Overflow":"visible","BackgroundSize":"100% 100%","ZIndex":"5","Top":"79px","Width":"60px","Opacity":"0.000000","TagName":"div"}},"name":"Untitled Scene","backgroundColor":"#FFFFFF"}];

var javascriptMapping = {};


	
	var Custom = (function() {
	return {
	};
}());

	
	var hypeDoc = new HYPE();
	
	hypeDoc.attributeTransformerMapping = attributeTransformerMapping;
	hypeDoc.scenes = scenes;
	hypeDoc.javascriptMapping = javascriptMapping;
	hypeDoc.Custom = Custom;
	hypeDoc.currentSceneIndex = 0;
	hypeDoc.mainContentContainerID = "599cdlogo_hype_container";
	hypeDoc.resourcesFolderName = resourcesFolderName;
	hypeDoc.showHypeBuiltWatermark = 0;
	hypeDoc.showLoadingPage = false;
	hypeDoc.drawSceneBackgrounds = true;
	hypeDoc.documentName = documentName;

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

