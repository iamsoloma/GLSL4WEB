#ifdef GL_ES
precision mediump float;
#endif


uniform float u_time;
uniform vec2 u_resolution;


void main()
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = gl_FragCoord.xy / u_resolution;


	float c = fract(sin(uv.x * 100.0) * 5000.0);
    vec3 col = vec3(c);

    // Output to screen
    gl_FragColor = vec4(col,1.0);
}