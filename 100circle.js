<script type="text/paperscript" canvas = "myCanvas">
			var x;
			var y;
			var r=10;
			var g =10;
			var b =10;

			for(x=0; x< 1001; x +=100){
				for(y =0; y<1001; y+=100){
					new Path.Circle(new Point(x, y), 10).fillColor = "rgb(" + r + ", " + g + ", " + b + ")";
					r +=1;
					g +=2;
					b +=3;
				}
			}
				
	</script>