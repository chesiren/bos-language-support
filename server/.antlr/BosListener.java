// Generated from d:/BAR/AntlrGrammarBos/bos-language-support/server/Bos.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link BosParser}.
 */
public interface BosListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link BosParser#preprocessor}.
	 * @param ctx the parse tree
	 */
	void enterPreprocessor(BosParser.PreprocessorContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#preprocessor}.
	 * @param ctx the parse tree
	 */
	void exitPreprocessor(BosParser.PreprocessorContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#file}.
	 * @param ctx the parse tree
	 */
	void enterFile(BosParser.FileContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#file}.
	 * @param ctx the parse tree
	 */
	void exitFile(BosParser.FileContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#declaration}.
	 * @param ctx the parse tree
	 */
	void enterDeclaration(BosParser.DeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#declaration}.
	 * @param ctx the parse tree
	 */
	void exitDeclaration(BosParser.DeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#pieceDec}.
	 * @param ctx the parse tree
	 */
	void enterPieceDec(BosParser.PieceDecContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#pieceDec}.
	 * @param ctx the parse tree
	 */
	void exitPieceDec(BosParser.PieceDecContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#staticVarDec}.
	 * @param ctx the parse tree
	 */
	void enterStaticVarDec(BosParser.StaticVarDecContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#staticVarDec}.
	 * @param ctx the parse tree
	 */
	void exitStaticVarDec(BosParser.StaticVarDecContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#funcDec}.
	 * @param ctx the parse tree
	 */
	void enterFuncDec(BosParser.FuncDecContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#funcDec}.
	 * @param ctx the parse tree
	 */
	void exitFuncDec(BosParser.FuncDecContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#arguments}.
	 * @param ctx the parse tree
	 */
	void enterArguments(BosParser.ArgumentsContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#arguments}.
	 * @param ctx the parse tree
	 */
	void exitArguments(BosParser.ArgumentsContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#statementBlock}.
	 * @param ctx the parse tree
	 */
	void enterStatementBlock(BosParser.StatementBlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#statementBlock}.
	 * @param ctx the parse tree
	 */
	void exitStatementBlock(BosParser.StatementBlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(BosParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(BosParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#assignStatement}.
	 * @param ctx the parse tree
	 */
	void enterAssignStatement(BosParser.AssignStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#assignStatement}.
	 * @param ctx the parse tree
	 */
	void exitAssignStatement(BosParser.AssignStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#definedVarStatement}.
	 * @param ctx the parse tree
	 */
	void enterDefinedVarStatement(BosParser.DefinedVarStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#definedVarStatement}.
	 * @param ctx the parse tree
	 */
	void exitDefinedVarStatement(BosParser.DefinedVarStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#incrementStatement}.
	 * @param ctx the parse tree
	 */
	void enterIncrementStatement(BosParser.IncrementStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#incrementStatement}.
	 * @param ctx the parse tree
	 */
	void exitIncrementStatement(BosParser.IncrementStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#decrementStatement}.
	 * @param ctx the parse tree
	 */
	void enterDecrementStatement(BosParser.DecrementStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#decrementStatement}.
	 * @param ctx the parse tree
	 */
	void exitDecrementStatement(BosParser.DecrementStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#ifStatement}.
	 * @param ctx the parse tree
	 */
	void enterIfStatement(BosParser.IfStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#ifStatement}.
	 * @param ctx the parse tree
	 */
	void exitIfStatement(BosParser.IfStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#whileStatement}.
	 * @param ctx the parse tree
	 */
	void enterWhileStatement(BosParser.WhileStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#whileStatement}.
	 * @param ctx the parse tree
	 */
	void exitWhileStatement(BosParser.WhileStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#forStatement}.
	 * @param ctx the parse tree
	 */
	void enterForStatement(BosParser.ForStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#forStatement}.
	 * @param ctx the parse tree
	 */
	void exitForStatement(BosParser.ForStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#varStatement}.
	 * @param ctx the parse tree
	 */
	void enterVarStatement(BosParser.VarStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#varStatement}.
	 * @param ctx the parse tree
	 */
	void exitVarStatement(BosParser.VarStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#keywordStatement}.
	 * @param ctx the parse tree
	 */
	void enterKeywordStatement(BosParser.KeywordStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#keywordStatement}.
	 * @param ctx the parse tree
	 */
	void exitKeywordStatement(BosParser.KeywordStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#callStatement}.
	 * @param ctx the parse tree
	 */
	void enterCallStatement(BosParser.CallStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#callStatement}.
	 * @param ctx the parse tree
	 */
	void exitCallStatement(BosParser.CallStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#startStatement}.
	 * @param ctx the parse tree
	 */
	void enterStartStatement(BosParser.StartStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#startStatement}.
	 * @param ctx the parse tree
	 */
	void exitStartStatement(BosParser.StartStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#spinStatement}.
	 * @param ctx the parse tree
	 */
	void enterSpinStatement(BosParser.SpinStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#spinStatement}.
	 * @param ctx the parse tree
	 */
	void exitSpinStatement(BosParser.SpinStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#optionalAcceleration}.
	 * @param ctx the parse tree
	 */
	void enterOptionalAcceleration(BosParser.OptionalAccelerationContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#optionalAcceleration}.
	 * @param ctx the parse tree
	 */
	void exitOptionalAcceleration(BosParser.OptionalAccelerationContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#stopSpinStatement}.
	 * @param ctx the parse tree
	 */
	void enterStopSpinStatement(BosParser.StopSpinStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#stopSpinStatement}.
	 * @param ctx the parse tree
	 */
	void exitStopSpinStatement(BosParser.StopSpinStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#optionalDeceleration}.
	 * @param ctx the parse tree
	 */
	void enterOptionalDeceleration(BosParser.OptionalDecelerationContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#optionalDeceleration}.
	 * @param ctx the parse tree
	 */
	void exitOptionalDeceleration(BosParser.OptionalDecelerationContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#turnStatement}.
	 * @param ctx the parse tree
	 */
	void enterTurnStatement(BosParser.TurnStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#turnStatement}.
	 * @param ctx the parse tree
	 */
	void exitTurnStatement(BosParser.TurnStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#moveStatement}.
	 * @param ctx the parse tree
	 */
	void enterMoveStatement(BosParser.MoveStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#moveStatement}.
	 * @param ctx the parse tree
	 */
	void exitMoveStatement(BosParser.MoveStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#scaleStatement}.
	 * @param ctx the parse tree
	 */
	void enterScaleStatement(BosParser.ScaleStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#scaleStatement}.
	 * @param ctx the parse tree
	 */
	void exitScaleStatement(BosParser.ScaleStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#speedNow}.
	 * @param ctx the parse tree
	 */
	void enterSpeedNow(BosParser.SpeedNowContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#speedNow}.
	 * @param ctx the parse tree
	 */
	void exitSpeedNow(BosParser.SpeedNowContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#waitForTurnStatement}.
	 * @param ctx the parse tree
	 */
	void enterWaitForTurnStatement(BosParser.WaitForTurnStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#waitForTurnStatement}.
	 * @param ctx the parse tree
	 */
	void exitWaitForTurnStatement(BosParser.WaitForTurnStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#waitForMoveStatement}.
	 * @param ctx the parse tree
	 */
	void enterWaitForMoveStatement(BosParser.WaitForMoveStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#waitForMoveStatement}.
	 * @param ctx the parse tree
	 */
	void exitWaitForMoveStatement(BosParser.WaitForMoveStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#waitForScaleStatement}.
	 * @param ctx the parse tree
	 */
	void enterWaitForScaleStatement(BosParser.WaitForScaleStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#waitForScaleStatement}.
	 * @param ctx the parse tree
	 */
	void exitWaitForScaleStatement(BosParser.WaitForScaleStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#emitSfxStatement}.
	 * @param ctx the parse tree
	 */
	void enterEmitSfxStatement(BosParser.EmitSfxStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#emitSfxStatement}.
	 * @param ctx the parse tree
	 */
	void exitEmitSfxStatement(BosParser.EmitSfxStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#sleepStatement}.
	 * @param ctx the parse tree
	 */
	void enterSleepStatement(BosParser.SleepStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#sleepStatement}.
	 * @param ctx the parse tree
	 */
	void exitSleepStatement(BosParser.SleepStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#hideStatement}.
	 * @param ctx the parse tree
	 */
	void enterHideStatement(BosParser.HideStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#hideStatement}.
	 * @param ctx the parse tree
	 */
	void exitHideStatement(BosParser.HideStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#showStatement}.
	 * @param ctx the parse tree
	 */
	void enterShowStatement(BosParser.ShowStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#showStatement}.
	 * @param ctx the parse tree
	 */
	void exitShowStatement(BosParser.ShowStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#explodeStatement}.
	 * @param ctx the parse tree
	 */
	void enterExplodeStatement(BosParser.ExplodeStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#explodeStatement}.
	 * @param ctx the parse tree
	 */
	void exitExplodeStatement(BosParser.ExplodeStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#signalStatement}.
	 * @param ctx the parse tree
	 */
	void enterSignalStatement(BosParser.SignalStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#signalStatement}.
	 * @param ctx the parse tree
	 */
	void exitSignalStatement(BosParser.SignalStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#setSignalMaskStatement}.
	 * @param ctx the parse tree
	 */
	void enterSetSignalMaskStatement(BosParser.SetSignalMaskStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#setSignalMaskStatement}.
	 * @param ctx the parse tree
	 */
	void exitSetSignalMaskStatement(BosParser.SetSignalMaskStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#setStatement}.
	 * @param ctx the parse tree
	 */
	void enterSetStatement(BosParser.SetStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#setStatement}.
	 * @param ctx the parse tree
	 */
	void exitSetStatement(BosParser.SetStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#getStatement}.
	 * @param ctx the parse tree
	 */
	void enterGetStatement(BosParser.GetStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#getStatement}.
	 * @param ctx the parse tree
	 */
	void exitGetStatement(BosParser.GetStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#attachUnitStatement}.
	 * @param ctx the parse tree
	 */
	void enterAttachUnitStatement(BosParser.AttachUnitStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#attachUnitStatement}.
	 * @param ctx the parse tree
	 */
	void exitAttachUnitStatement(BosParser.AttachUnitStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#dropUnitStatement}.
	 * @param ctx the parse tree
	 */
	void enterDropUnitStatement(BosParser.DropUnitStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#dropUnitStatement}.
	 * @param ctx the parse tree
	 */
	void exitDropUnitStatement(BosParser.DropUnitStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#returnStatement}.
	 * @param ctx the parse tree
	 */
	void enterReturnStatement(BosParser.ReturnStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#returnStatement}.
	 * @param ctx the parse tree
	 */
	void exitReturnStatement(BosParser.ReturnStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#playSoundStatement}.
	 * @param ctx the parse tree
	 */
	void enterPlaySoundStatement(BosParser.PlaySoundStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#playSoundStatement}.
	 * @param ctx the parse tree
	 */
	void exitPlaySoundStatement(BosParser.PlaySoundStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#cacheStatement}.
	 * @param ctx the parse tree
	 */
	void enterCacheStatement(BosParser.CacheStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#cacheStatement}.
	 * @param ctx the parse tree
	 */
	void exitCacheStatement(BosParser.CacheStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#dontCacheStatement}.
	 * @param ctx the parse tree
	 */
	void enterDontCacheStatement(BosParser.DontCacheStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#dontCacheStatement}.
	 * @param ctx the parse tree
	 */
	void exitDontCacheStatement(BosParser.DontCacheStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#dontShadowStatement}.
	 * @param ctx the parse tree
	 */
	void enterDontShadowStatement(BosParser.DontShadowStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#dontShadowStatement}.
	 * @param ctx the parse tree
	 */
	void exitDontShadowStatement(BosParser.DontShadowStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#dontShadeStatement}.
	 * @param ctx the parse tree
	 */
	void enterDontShadeStatement(BosParser.DontShadeStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#dontShadeStatement}.
	 * @param ctx the parse tree
	 */
	void exitDontShadeStatement(BosParser.DontShadeStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterExpression(BosParser.ExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitExpression(BosParser.ExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#term}.
	 * @param ctx the parse tree
	 */
	void enterTerm(BosParser.TermContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#term}.
	 * @param ctx the parse tree
	 */
	void exitTerm(BosParser.TermContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#constant}.
	 * @param ctx the parse tree
	 */
	void enterConstant(BosParser.ConstantContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#constant}.
	 * @param ctx the parse tree
	 */
	void exitConstant(BosParser.ConstantContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#globalConstant}.
	 * @param ctx the parse tree
	 */
	void enterGlobalConstant(BosParser.GlobalConstantContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#globalConstant}.
	 * @param ctx the parse tree
	 */
	void exitGlobalConstant(BosParser.GlobalConstantContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#unaryOp}.
	 * @param ctx the parse tree
	 */
	void enterUnaryOp(BosParser.UnaryOpContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#unaryOp}.
	 * @param ctx the parse tree
	 */
	void exitUnaryOp(BosParser.UnaryOpContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#funcCall}.
	 * @param ctx the parse tree
	 */
	void enterFuncCall(BosParser.FuncCallContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#funcCall}.
	 * @param ctx the parse tree
	 */
	void exitFuncCall(BosParser.FuncCallContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#randCall}.
	 * @param ctx the parse tree
	 */
	void enterRandCall(BosParser.RandCallContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#randCall}.
	 * @param ctx the parse tree
	 */
	void exitRandCall(BosParser.RandCallContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#commaExpression}.
	 * @param ctx the parse tree
	 */
	void enterCommaExpression(BosParser.CommaExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#commaExpression}.
	 * @param ctx the parse tree
	 */
	void exitCommaExpression(BosParser.CommaExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#getTerm}.
	 * @param ctx the parse tree
	 */
	void enterGetTerm(BosParser.GetTermContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#getTerm}.
	 * @param ctx the parse tree
	 */
	void exitGetTerm(BosParser.GetTermContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#op}.
	 * @param ctx the parse tree
	 */
	void enterOp(BosParser.OpContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#op}.
	 * @param ctx the parse tree
	 */
	void exitOp(BosParser.OpContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#expressionList}.
	 * @param ctx the parse tree
	 */
	void enterExpressionList(BosParser.ExpressionListContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#expressionList}.
	 * @param ctx the parse tree
	 */
	void exitExpressionList(BosParser.ExpressionListContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#varName}.
	 * @param ctx the parse tree
	 */
	void enterVarName(BosParser.VarNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#varName}.
	 * @param ctx the parse tree
	 */
	void exitVarName(BosParser.VarNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#pieceName}.
	 * @param ctx the parse tree
	 */
	void enterPieceName(BosParser.PieceNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#pieceName}.
	 * @param ctx the parse tree
	 */
	void exitPieceName(BosParser.PieceNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#funcName}.
	 * @param ctx the parse tree
	 */
	void enterFuncName(BosParser.FuncNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#funcName}.
	 * @param ctx the parse tree
	 */
	void exitFuncName(BosParser.FuncNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#axis}.
	 * @param ctx the parse tree
	 */
	void enterAxis(BosParser.AxisContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#axis}.
	 * @param ctx the parse tree
	 */
	void exitAxis(BosParser.AxisContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#signedIntegerConstant}.
	 * @param ctx the parse tree
	 */
	void enterSignedIntegerConstant(BosParser.SignedIntegerConstantContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#signedIntegerConstant}.
	 * @param ctx the parse tree
	 */
	void exitSignedIntegerConstant(BosParser.SignedIntegerConstantContext ctx);
	/**
	 * Enter a parse tree produced by {@link BosParser#signedFloatConstant}.
	 * @param ctx the parse tree
	 */
	void enterSignedFloatConstant(BosParser.SignedFloatConstantContext ctx);
	/**
	 * Exit a parse tree produced by {@link BosParser#signedFloatConstant}.
	 * @param ctx the parse tree
	 */
	void exitSignedFloatConstant(BosParser.SignedFloatConstantContext ctx);
}