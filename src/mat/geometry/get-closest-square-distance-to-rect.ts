
import { squaredDistanceBetween } from 'flo-vector2d';


/**
 * @hidden
 */
function getClosestSquareDistanceToRect(box: number[][], p: number[]) {

	let [[x0,y0],[x1,y1]] = box;
	let [xp,yp] = p;
	
	if (xp < x0) {
		if (yp < y0) {
			return squaredDistanceBetween(box[0], p);
		} else if (yp > y1) {
			return squaredDistanceBetween([x0,y1], p);
		} else {
			return (x0 - xp)**2;
		}
	} else if (xp > x1) {
		if (yp < y0) {
			return squaredDistanceBetween([x1,y0], p);
		} else if (yp > y1) {
			return squaredDistanceBetween(box[1], p);
		} else {
			return (xp - x1)**2;
		}
	} else {
		if (yp < y0) {
			return (y0 - yp)**2;
		} else if (yp > y1) {
			return (yp - y1)**2;
		} 
			
		return 0;
	}
}


export { getClosestSquareDistanceToRect }
