/**
 * while true循环
 * 
 * while (true) { }
 */
class ControlWhileTrue extends eui.Component implements eui.UIComponent
{
	public constructor()
	{
		super();
		this.skinName = "ControlWhileTrueSkin";
	}

	protected partAdded(partName: string, instance: any): void
	{
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void
	{
		super.childrenCreated();
	}

}