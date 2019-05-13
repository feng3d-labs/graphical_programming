/**
 * 事件起始
 */
class EventStart extends eui.Component implements eui.UIComponent
{
	public constructor()
	{
		super();
		this.skinName = "EventStartSkin";
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