function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setToFixedVelocity(vec_x ,vec_y, fixedVelocity){
  z = (fixedVelocity) / (Math.pow((vec_x*vec_x)+(vec_y*vec_y),1/2));
  obj = {"x": vec_x*z, "y": vec_y*z}
  return obj
}

function distanceb(x1, y1, x2, y2){
  return Math.sqrt( Math.pow((x1 -x2),2) + Math.pow((y1 - y2),2));
}

Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {
      this.splice(i, 1);
      i--;
    }
  }
  return this;
};
//rppGz7rAAuw
