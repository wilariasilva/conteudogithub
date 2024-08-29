   theShader.setUniform("resolution", [width, height]);
   theShader.setUniform("time", millis() / 1000.0);
   theShader.setUniform("mouse", [mouseX, map(mouseY, 0, height, height, 0)]);

   // passing the shaderTexture layer geometry to render on
   shaderTexture.rect(0,0,width,height);

   background(255);

   // pass the shader as a texture
   texture(shaderTexture);

   translate(-150, 0, 0);
   push();
   rotateZ(theta * mouseX * 0.0001);
   rotateX(theta * mouseX * 0.0001);
   rotateY(theta * mouseX * 0.0001);
   theta += 0.05;
   sphere(125);
   pop();

   // passing a fifth parameter to ellipse for smooth edges in 3D
   ellipse(260,0,200,200,100);
 }
