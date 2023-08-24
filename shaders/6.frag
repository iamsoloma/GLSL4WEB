#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

vec3 palette(float t) {
//http://dev.thi.ng/gradients/
//
    vec3 a = vec3(1.000, 0.500, 0.500);
    vec3 b = vec3(0.500, 0.500, 0.500);
    vec3 c = vec3(0.750, 1.000, 0.667);
    vec3 d = vec3(0.800, 1.000, 0.333);
    
    return a + b*cos(6.28*(c * t * d));
}

void main(){
    vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / u_resolution.y;

    //change uv.x -> uv.y
    float d = cos(length(uv.x));

    vec3 pulse = vec3(d + sin(u_time));
    
    vec3 color = pulse * palette(d);

    gl_FragColor = vec4(color, 1.0);  
}