#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

vec3 palette(float t) {
//http://dev.thi.ng/gradients/
//
    vec3 a = vec3(0.500, 0.500, 0.500);
    vec3 b = vec3(0.500, 0.500, 0.500);
    vec3 c = vec3(1.000, 1.000, 1.000);
    vec3 d = vec3(0.000, 0.333, 0.667);
    
    return a + b*cos(6.28*(c * t * d));
}


void main()
{

    vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / u_resolution.y;
    
    float d = length(uv);
    
    
    vec3 col = palette(d + u_time);
    
    
    d = sin(d * 8.0 + u_time) / 8.0;
    d = abs(d);
    
    d = 0.01 / d;
    
    
    col *= d;
    

    gl_FragColor = vec4(col, 1.0);
}