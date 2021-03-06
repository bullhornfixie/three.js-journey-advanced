precision mediump float;

// fetch uniform
uniform vec3 uColor;
uniform sampler2D uTexture;

varying vec2 vUv;
varying float vElevation;

// Output function for fragment shader
void main()
{
    vec4 textureColor = texture2D(uTexture, vUv);
    textureColor.rgb *= vElevation * 2.0 + 0.7;
    gl_FragColor = textureColor;
}