precision mediump float;

// fetch uniform
uniform vec3 uColor;
uniform sampler2D uTexture;

varying vec2 vUv;

void main()
// changes the color 
{
    vec4 textureColor = texture2D(uTexture, vUv);
    gl_FragColor = textureColor;
}