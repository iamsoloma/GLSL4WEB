#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float random (vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}


void main(){

    vec2 st = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / u_resolution.y;

    st *= 10.0;
    vec2 ipos = floor(st);
    vec2 fpos = fract(st);

    vec3 color = vec3(random( ipos / 10000000.0 + u_time / 10000000.0 ));

    gl_FragColor = vec4(color[0] + 1.0 / sin(abs(u_time)), color[1] + sin(abs(u_time)), color[2] + cos(abs(u_time)), 1.0);
}
