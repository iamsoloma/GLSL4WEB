#ifdef GL_ES
precision mediump float;
#endif


uniform float u_time;
uniform vec2 u_resolution;


void main()
{
    vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / u_resolution.y;

    float d = length(uv);

    vec3 color = vec3(d + sin(u_time*2.0));
    
    gl_FragColor = vec4(color*-1.0, 1.0);
}
