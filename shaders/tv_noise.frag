#ifdef GL_ES
precision mediump float;
#endif

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;
float ran(float a) {
    return fract(sin(a*2250.0)*2750.0);
}



void main() {

	vec2 p = gl_FragCoord.xy/resolution;
	float r = ran(p.x*p.x+p.y*p.y*time);
	gl_FragColor = vec4(r,r,r,1.0);
}