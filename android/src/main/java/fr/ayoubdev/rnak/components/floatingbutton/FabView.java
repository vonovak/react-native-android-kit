package fr.ayoubdev.rnak.components.floatingbutton;

import android.content.Context;
import android.content.res.ColorStateList;
import android.graphics.Color;
import android.support.design.widget.FloatingActionButton;

import fr.ayoubdev.rnak.utils.RNAKDrawable;

public class FabView extends FloatingActionButton {
    public FabView(Context context) {
        super(context);
    }

    public void setColor(String color) {
        this.setBackgroundTintList(ColorStateList.valueOf(Color.parseColor(color)));
    }

    public void setRippleColor(String color) {
        super.setRippleColor(Color.parseColor(color));
    }

    public void setImageDrawable(String filename) {
        int id = RNAKDrawable.getDrawableID(this, filename);
        super.setImageDrawable(this.getResources().getDrawable(id));
    }

    public void hide(boolean isHidden) {
        if (isHidden)
            super.hide();
        else
            this.show();
    }

}
