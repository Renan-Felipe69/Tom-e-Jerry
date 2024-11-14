const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.bound,
		C3.Plugins.Keyboard,
		C3.Behaviors.Sin,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Keyboard.Cnds.OnKeyReleased,
		C3.Behaviors.Platform.Cnds.IsOnFloor,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Sprite.Acts.StopAnim,
		C3.Plugins.Sprite.Cnds.OnDestroyed
	];
};
self.C3_JsPropNameTable = [
	{Sólido: 0},
	{solo: 0},
	{Plataforma: 0},
	{CentrarEm: 0},
	{RestritoAoLayout: 0},
	{jerry: 0},
	{tom: 0},
	{Teclado: 0},
	{fundo: 0},
	{Senóide: 0},
	{queio: 0},
	{pão: 0},
	{espinhos: 0},
	{Sprite: 0},
	{bastão: 0},
	{tecla: 0},
	{sprite2: 0},
	{Sprite3: 0},
	{terra: 0}
];

self.InstanceType = {
	solo: class extends self.ISpriteInstance {},
	jerry: class extends self.ISpriteInstance {},
	tom: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	fundo: class extends self.ISpriteInstance {},
	queio: class extends self.ISpriteInstance {},
	pão: class extends self.ISpriteInstance {},
	espinhos: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	bastão: class extends self.ISpriteInstance {},
	tecla: class extends self.ISpriteInstance {},
	sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	terra: class extends self.ISpriteInstance {}
}