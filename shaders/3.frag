#ifdef GL_ES
precision mediump float;
#endif


uniform float u_time;
uniform vec2 u_resolution;


float stat_noise(vec2 pos) {
	float noise = fract(sin((pos.x * 200.0 + u_time) + (pos.y * 600.0 + u_time)) * 5000.0);
	return noise;
}


void main()
{
    // Normalized pixel coordinates (from 0 to 1)
    //vec2 uv = gl_FragCoord.xy / u_resolution;
    vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / u_resolution.y;


	float n = stat_noise(uv);
    vec3 col = vec3(n);

    // Output to screen
    gl_FragColor = vec4(col,1.0);
}
