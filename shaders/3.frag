#ifdef GL_ES
precision mediump float;
#endif


uniform float u_time;
uniform vec2 u_resolution;


float noise(vec2 pos) {
	float noise = fract(sin((pos.x * 200.0 + u_time) + (pos.y * 600.0 + u_time)) * 5000.0);
	return noise;
}


void main()
{
    vec2 uv = gl_FragCoord.xy / u_resolution;


	float n = noise(uv);
    vec3 col = vec3(n);


    gl_FragColor = vec4(col,1.0);
}
