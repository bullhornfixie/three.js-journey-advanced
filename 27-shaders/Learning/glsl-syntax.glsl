uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

attribute vec3 position;

void main()
{
    // float a = 1.0
    // float b = 2.0
    // float c = a + b;

    // int foo = 123
    // int bar = 456
    // int fooBar = foo + bar

    // bool foo = true 
    // bool bar = false

    vec2 foo = vec2(-1.0, 2.0)
    vec3 bar = vec3(0.0, 0.1, 0.2)
    vec3 purple = vec3(0.0)
    purpleColor.r = 0.5
    purpleColor.g = 0.5
    purpleColor.b = 1.0

    vec4 foo4 = vec4(1.0, 2.0, 3.0, 4.0)

    float lorenImpsum()
    {
        float a = 1.0;
        float b = 2.0;

        return a + b;
    }

    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}