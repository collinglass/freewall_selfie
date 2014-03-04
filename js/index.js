var temp = "<img class='brick' style='width:{width}%; height: {height}%;' src='img/index.jpg'>";
			var dimW = [
				16.66, 33.34
			];
			var dimH = [
				25, 50
			];


			var w = 1, h = 1, html = '', color = '', limitItem = 28;
			for (var i = 0; i < limitItem; ++i) {
				var picker = dimH.length * Math.random() << 0;
				h = dimH[picker];
				w = dimW[picker];
				html += temp.replace(/\{height\}/g, h).replace(/\{width\}/g, w);
			}
			$("#freewall").html(html);
			

			$(function() {
				var wall = new freewall("#freewall");
				wall.reset({
					selector: '.brick',
					animate: false,
					cellW: 160,
					cellH: 160,
					gutterX: 0,
					gutterY: 0,
					delay: 30,
					onResize: function() {
						wall.refresh($(window).width() - 30, $(window).height() - 30);
					}
				});
				// caculator width and height for IE7;
				wall.fitZone($(window).width() - 30 , $(window).height() - 30);
			});