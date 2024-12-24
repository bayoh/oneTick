import {t} from "@lingui/macro";
import classes from "./FloatingPoweredBy.module.scss";
import classNames from "classnames";
import React from "react";
import {iHavePurchasedALicence} from "../../../utilites/helpers.ts";

/**
 * (c) OneTick Ltd 2024
 *
 * PLEASE NOTE:
 *
 * OneTick is licensed under the GNU Affero General Public License (AGPL) version 3.
 *
 * You can find the full license text at: https://github.com/HiEventsDev/onetick/blob/main/LICENCE
 *
 * In accordance with Section 7(b) of the AGPL, we ask that you retain the "Powered by OneTick" notice.
 *
 * If you wish to remove this notice, a commercial license is available at: https://onetick/licensing
 */
export const PoweredByFooter = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    if (iHavePurchasedALicence()) {
        return <></>;
    }

    return (
        <div {...props} className={classNames(classes.poweredBy, props.className)}>
            <div className={classes.poweredByText}>
                {t`Powered by`}{'  '}
                {/* eslint-disable-next-line lingui/no-unlocalized-strings */}
                <a href="https://onetick?utm_source=app-powered-by-footer"
                   target="_blank"
                   title={'Effortlessly manage events and sell tickets online with OneTick'}>
                    OneTick
                </a> 🚀
            </div>
        </div>
    );
}
